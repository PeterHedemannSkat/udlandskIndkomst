/**
 * Bliver ikke brugt, men kan være anvendelig hvis kriterierne skal skærpes
 */

export class Eligible33A {

    longStayinDK: Boolean;
    workinDK: Boolean;
    workInDKRelatingToWorkAbroad: Boolean;
    notInDK_OnSixthMonthDay: Boolean;
    notEndingStayWithHolidayInDK: Boolean;
    vilAnvende33A: boolean;


    totalEligibleTo33A() {
      return (
        /* skal være færre end 42 feriedage i DK i en hvilken som helst periode */
        this.longStayinDK === false &&
        (this.workinDK === false || this.workInDKRelatingToWorkAbroad === true) &&
        this.notInDK_OnSixthMonthDay === true &&
        this.notEndingStayWithHolidayInDK === true
      );
    }

}
