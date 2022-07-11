import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IPoke, IData, ICreatePoke } from 'src/app/app.types';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DialogBoxComponent } from '../../shared-components/dialog-box/dialog-box.component';
import { PokemonService } from '../pokemon.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isPopUpCliked: boolean = false;
  addClicked:boolean=false;
  updateClicked: boolean = false;
  form!: FormGroup;
  showPopUp: boolean = false;
  pokemons: IPoke[] = [];
  editData = {
    id: '',
    name: '',
    level: 0,
    type: '',
    createdOn: '',
    updatedOn: '',
    isSelected: false
  }
  value: string = '';
  pokes: any = this.pokemons;
  columnsToDisplay: string[] = [
    'name',
    'level',
    'type',
    'createdOn',
    'updatedOn',
    'edit',
    'delete',
  ];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private pokeService: PokemonService,
    public fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      level: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
    this.pokeService.getPoke().subscribe((res) => {
      this.pokemons = Object(res).data;
    });
  }

  addButtonClicked() {
    this.isPopUpCliked = !this.isPopUpCliked;
    this.addClicked = true
    this.updateClicked = false;
  }
 

  popupFormData(form: FormGroup) {
    if(this.addClicked){
      this.createPoke(form.value);
    this.addClicked = false;
    }else if(this.updateClicked){
      this.updatePoke(form.value)
      this.updateClicked=false;
    form.reset();
  }
  this.isPopUpCliked = !this.isPopUpCliked;
  }
  editButtonClicked(data:IPoke){
    
    this.isPopUpCliked = !this.isPopUpCliked;
    this.addClicked = false;
    this.updateClicked =true;
    this.editData = data;
    console.log(this.editData);
  }

  createPoke(data:ICreatePoke){
    console.log('bye')
    this.pokeService.createPokemon(data).subscribe((res) => {
      console.log(res);
      this.pokemons.push(Object(res).data);
    });
    this.pokeService.getPoke().subscribe((res) => {
      this.pokemons = Object(res).data;
    });
 
  }


  updatePoke(data: IPoke) {
    console.log(data);
    this.pokeService.updatePokemon({...this.editData,...data}).subscribe((res)=>{
      alert('Pokemon Updated');
    })
    this.pokeService.getPoke().subscribe((res) => {
      this.pokemons = Object(res).data;
    });
  }

  deletePoke(id:string) {
    this.pokeService.deletePokemon(id).subscribe((res) => {
      console.log(res);
    });
    this.pokeService.getPoke().subscribe((res) => {
      this.pokemons = Object(res).data;
    });
  }
 

  gotoLogin() {
    this.router.navigate(['']);
  }

  displayTableContent() {}
  dataSource = new MatTableDataSource(this.pokemons);
}
