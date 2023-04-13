import { useEffect } from "react"

export const useLockScroll = (open: boolean) => {

    useEffect(() => {

        if (open) {
            document.body.dataset.scrollLock = 'true';
            document.body.style.overflow = 'hidden';
            return;
        }
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        
        delete document.body.dataset.scrollLock;

        return;
    })
}