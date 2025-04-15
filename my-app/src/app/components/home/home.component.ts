import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../models/housinglocation';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor(
    private housingService: HousingService
  ) {
    this.housingService = inject(HousingService);
  }

  filterResults(text: String) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>  housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
  }

  ngOnInit(): void {
    this.housingService.getAllHousingLocations().subscribe((housingLocationList) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    })
  }

}
