// localStorage key for the accent
export const ACCENT_STORAGE_KEY = 'accent'

// Accent on first visit, before one is saved
export const DEFAULT_ACCENT = 'blue'

// Applies the saved accent before paint
export const ACCENT_SCRIPT = `try{var a=localStorage.getItem('${ACCENT_STORAGE_KEY}');if(a)document.documentElement.dataset.accent=a}catch(e){}`
