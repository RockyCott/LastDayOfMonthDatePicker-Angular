import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LastDayOfMonthDatePicker-Angular';

  lastDay = new UntypedFormControl("");

  /**
   * Method asociado al campo fecha permitiendo solo seleccionar
   * los dias que son los ultimos de cada mes y mayores a la fecha actual
   * @param date - fecha seleccionada
   * @returns - boolean para indica que se trata del ultimo de un mes o no
   */
  isLastDayOfMonth = (date: any): boolean => {
    if (date) {
      const dateSelected = new Date(date);
      const lastDayOfMonth = new Date(
        dateSelected.getFullYear(),
        dateSelected.getMonth() + 1,
        0
      );
      return dateSelected.getTime() === lastDayOfMonth.getTime();
    } else {
      return true;
    }
  };
}
