export const attaches = (file: string, title?: string) => {
    return `<div class="cdx-attaches cdx-attaches--with-file">
        <div class="cdx-attaches__file-icon">
        <div class="cdx-attaches__file-icon-background">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="fill: none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.32 8.44 9.5 12.19c-.37.36-.57.85-.56 1.37a2.05 2.05 0 0 0 2 1.98c.53 0 1.02-.19 1.39-.55l3.83-3.75a3.75 3.75 0 0 0 1.1-2.74 4.1 4.1 0 0 0-4-3.96 3.85 3.85 0 0 0-2.77 1.1L6.66 9.39A5.63 5.63 0 0 0 5 13.5a6.14 6.14 0 0 0 6 5.94 5.77 5.77 0 0 0 4.17-1.64l3.83-3.75" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </div>
        </div>
        <div class="cdx-attaches__file-info">
        <div class="cdx-attaches__title" data-placeholder="File title">${title}</div>
        </div>
        <a class="cdx-attaches__download-button" href="${file}" target="_blank" rel="nofollow noindex noreferrer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="m7 10 4.86 4.86c.08.08.2.08.28 0L17 10" stroke="#000" stroke-width="2" stroke-linecap="round"></path>
        </svg>
        </a>
        </div>`;
};
  
  