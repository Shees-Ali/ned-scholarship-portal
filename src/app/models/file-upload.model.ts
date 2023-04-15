export class FileUpload {
  name?: string;
  file?: File | undefined | null;
  progress: boolean = false;

  constructor(file: File | undefined | null) {
    this.file = file;
    this.name = file?.name;
  }
}
