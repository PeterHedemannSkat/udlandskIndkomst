import { Component, OnInit } from "@angular/core";
import { CommonUdlandsService } from "../../servicesUdenlandskIndkomst/commonServices";
import { StateService } from "../../state/stateContainer";
import { TxtSharedService } from "../../TxtSharedService/txtSharedService";
import { PrintService } from "../../TxtSharedService/printServices";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-indkomsttype",
  templateUrl: "./indkomsttype.component.html",
  styles: []
})
export class IndkomsttypeComponent implements OnInit {
  constructor(
    public commons: CommonUdlandsService,
    public state: StateService,
    public text: TxtSharedService,
    public printTxt: PrintService
  ) {}

  ngOnInit() {}

  publicTypes(arr: any) {
    const testEnv = false,
      productionItems = ["capitalIncome", "stocks", "pension"],
      developmentItems = ["capitalIncome", "stocks", "loon", "pension"],
      deployed = testEnv ? developmentItems : productionItems;

    return arr.filter(el => deployed.indexOf(el.value) > -1);
  }
}
