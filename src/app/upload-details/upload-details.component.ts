import { Component, Input } from '@angular/core';
import { FileUpload } from '../fileUPLoad';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.css']
})
export class UploadDetailsComponent {
  @Input() fileUpload!: FileUpload;

  constructor(private uploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
  openPdfFile(fileUpload: FileUpload){
    
  }
}
