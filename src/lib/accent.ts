/** localStorage key for the chosen accent. Shared by the no-flash script and the picker. */
export const ACCENT_STORAGE_KEY = 'accent'

/** Runs in <head> before paint so a saved accent never flashes the default one. */
export const ACCENT_SCRIPT = `try{var a=localStorage.getItem('${ACCENT_STORAGE_KEY}');if(a)document.documentElement.dataset.accent=a}catch(e){}`
