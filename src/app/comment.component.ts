import { Component, OnInit } from '@angular/core';
import { HttpService } from './service/httpservice.service';
import { Table } from './service/data-module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

interface Sdata {
  name: string;
  email: string;
  comment: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  providers: [MessageService]

})

export class CommentComponent implements OnInit {
  employeForm: FormGroup;
  selectedColumns: any[] = [];
  submitted: boolean = false;
  error: Error;
  tabledata: any[] = [];
  setdata: any[] = [];
  displaydialog: boolean = false;
  constructor(private http: HttpService, private fb: FormBuilder, private messageService: MessageService) {
    this.GetData();
    this.setForm();
  }

  ngOnInit(): void {
    const me = this;
    me.selectedColumns = Table.headers[0].cols;
  }
  GetData() {
    this.http.getData().subscribe((res: []) => {
      console.log(res);
      this.tabledata = res;

    })
  }

  AddNewDetails() {
    this.displaydialog = true;
  }
  setForm() {
    this.employeForm = this.fb.group({
      name: [{ value: null, disabled: false }, [Validators.required]],
      commentcon: [{ value: null, disabled: false }, [Validators.required, Validators.maxLength(250), Validators.minLength(200)]],
      emailcontrol: [{ value: null, disabled: false }, [Validators.required, Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });
  }
  onSubmit(f) {
    this.submitted = true;
    if (this.employeForm.status != 'VALID') {
      return;
    }

    this.setdata = JSON.parse(localStorage.getItem('tabledata')) || [];
    let formdata = {} as Sdata;
    formdata.comment = f.commentcon;
    formdata.email = f.emailcontrol;
    formdata.name = f.name;
    this.setdata.push(formdata);
    localStorage.setItem('tabledata', JSON.stringify(this.setdata));
    console.log(f, this.employeForm);
    this.displaydialog = false;
    console.log("FINAL-DATA-LOCAL", (JSON.parse(localStorage.getItem('tabledata'))))
    this.messageService.add({ severity: 'success', summary: 'Added Successfully', detail: 'Notification' });
  }
   CloseDialog() {
    this.displaydialog = false;
  }
}
