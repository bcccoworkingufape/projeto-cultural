export interface NodemailerDataFormat {
    to: string;
    from: string;
    subject: string; 
    templateEmailName: string;
    templateEmailReplacements: any
}