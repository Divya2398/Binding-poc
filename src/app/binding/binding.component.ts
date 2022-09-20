import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  title: String = 'Angular session'
  product = {
    name: "dress",
    price: 500,
    quantity: 3

  }
  btnstatus: Boolean = true
  constructor() { }

  event() {
    this.title = "Event Binding"
  }
  email = 'example@gmail.com'

  username = ''
  inputstatus = true

  enable() {
    this.inputstatus = false
  }

  imgUrl = 'assets/images/Nature.jpg'
  ngOnInit(): void {
    setTimeout(() => {
      this.btnstatus = false
    }, 5000)
  }

}
