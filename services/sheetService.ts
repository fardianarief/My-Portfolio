import Papa from 'papaparse';

// =============================================================================================
// KONFIGURASI SPREADSHEET
// =============================================================================================
// Link yang Anda berikan (https://docs.google.com/spreadsheets/d/e/2PACX.../pub?output=csv)
// adalah link "Published". Link ini TIDAK bisa digunakan untuk mengambil data per-tab (Sheet).
//
// Agar fitur multi-tab (Profile, Experience, dll) berfungsi, mohon masukkan ID dari URL EDIT.
//
// 1. Buka Google Sheet Anda di browser (Mode Edit).
// 2. Lihat URL di address bar: https://docs.google.com/spreadsheets/d/1xYz.../edit
// 3. Copy bagian acak setelah '/d/' dan sebelum '/edit'.
//
// Masukkan ID tersebut di bawah ini:
// =============================================================================================

const SPREADSHEET_CONFIG_ID = '1BELTKtfoOvPeu1H4olKVhlbjcqSucHxO8pqN44KhGHc'; 
// Contoh ID yang benar biasanya dimulai dengan angka 1, misal: '1MvQeO...' 
// JANGAN gunakan link yang dimulai dengan '2PACX...', karena itu tidak akan bekerja untuk multi-tab.

const getSpreadsheetId = (input: string) => {
  // Cek jika user belum mengganti placeholder atau salah memasukkan link pub
  if (!input || input.includes('MASUKKAN_ID') || input.includes('2PACX')) {
      return null;
  }
  
  // Fitur tambahan: Jika user tidak sengaja paste URL lengkap (https://docs.../d/ID/edit)
  // Kita akan otomatis ambil ID-nya saja.
  const match = input.match(/\/d\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : input;
};

export const fetchSheetData = async (sheetName: string) => {
  const spreadsheetId = getSpreadsheetId(SPREADSHEET_CONFIG_ID);

  if (!spreadsheetId) {
    console.warn("Spreadsheet ID belum diset atau salah format di services/sheetService.ts. Menggunakan data default.");
    return null;
  }

  // Menggunakan Google Visualization API untuk mengambil spesifik Sheet berdasarkan Nama Tab
  // Note: Sheet harus di-share sebagai "Anyone with the link can view" agar endpoint ini bisa diakses tanpa login.
  // UPDATE: Menambahkan parameter '&t=' + timestamp untuk mencegah caching browser/Google, 
  // agar data baru langsung muncul saat di-refresh.
  const sheetParam = encodeURIComponent(sheetName);
  const cacheBuster = new Date().getTime(); 
  const baseUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv&sheet=${sheetParam}&t=${cacheBuster}`;

  try {
    const response = await fetch(baseUrl);
    
    // Google Sheets mengembalikan HTML login page (status 200) jika tidak memiliki akses (bukan CSV).
    // Kita cek content-type atau berasumsi jika text yang dikembalikan diawali <!DOCTYPE html, berarti gagal auth.
    const csvText = await response.text();

    if (csvText.trim().toLowerCase().startsWith('<!doctype html') || csvText.includes('google.com/accounts')) {
        throw new Error("Spreadsheet tidak publik (Permission Denied).");
    }
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
            // Validasi sederhana untuk memastikan data terambil
            if (results.data && results.data.length > 0) {
                resolve(results.data);
            } else {
                console.warn(`Sheet "${sheetName}" kosong atau tidak ditemukan.`);
                resolve(null);
            }
        },
        error: (err) => reject(err),
      });
    });
  } catch (error) {
    // Suppress full error stack trace for cleaner console, but warn user about permissions.
    console.warn(`[SheetService] Gagal mengambil data "${sheetName}". Menggunakan data default.`);
    console.warn(`Hint: Pastikan Google Sheet diset ke "Anyone with the link can View" (Siapa saja yang memiliki link dapat melihat). Pesan error: ${error instanceof Error ? error.message : 'Network Error/CORS'}`);
    
    // Return null agar komponen menggunakan data default/hardcoded
    return null;
  }
};