import MicLogo from '../assets/icons/mic.png'
import CheckLogo from '../assets/icons/check.png'
import DiffLogo from '../assets/icons/diff.png'
import PDFLogo from '../assets/icons/programming-code-document.png'
import TextToSpeech from '../assets/icons/align-center.png'

export const routes = [
    {
        title: "მართლმწერი",
        path: "/1",
        icon: CheckLogo,
    }, 
    {
        title: "ტექსტის შედარება",
        path: "/",
        icon: DiffLogo,
    }, 
    {
        title: "ხმა -> ტექსტი",
        path: "/2",
        icon: MicLogo,
    }, 
    {
        title: "ტექსტი -> ხმა",
        path: "/3",
        icon: TextToSpeech,
    }, 
    {
        title: "PDF კონვერტაცია",
        path: "/4",
        icon: PDFLogo,
    }, 
];