export class FileUpload {
  name?: string;
  file?: File | undefined | null;
  progress: number = 0;

  constructor(file: File | undefined | null) {
    this.file = file;
    this.name = file?.name;
  }
}
