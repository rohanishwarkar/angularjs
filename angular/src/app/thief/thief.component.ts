import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ThiefService } from '../shared/thief.service';
import { Thief } from '../shared/thief.model';

declare var M: any;

@Component({
  selector: 'app-thief',
  templateUrl: './thief.component.html',
  styleUrls: ['./thief.component.css'],
  providers: [ThiefService]
})
export class ThiefComponent implements OnInit {

  constructor(private thiefService: ThiefService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshThiefList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.thiefService.selectedThief = {
      _id: "",
      name: "",
      area: "",
      crime: "",
      phone: null
    }
  }

  onSubmit(form: NgForm) {
    console.log("Here")
    console.log(form.value._id)
    if (form.value._id == ""|| form.value._id==null) {
      this.thiefService.postThief(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshThiefList();
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
      });
    }
    else {
      this.thiefService.putThief(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshThiefList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  refreshThiefList() {
    this.thiefService.getThiefList().subscribe((res) => {
      this.thiefService.thieves = res as Thief[];
    });
  }

  onEdit(th: Thief) {
    this.thiefService.selectedThief = th;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.thiefService.deleteThief(_id).subscribe((res) => {
        this.refreshThiefList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
