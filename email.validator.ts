import { AbstractControl } from "@angular/forms"; 

// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//     return (control: AbstractControl): ValidationErrors | null => {
//       const forbidden = nameRe.test(control.value);
//       return forbidden ? {forbiddenName: {value: control.value}} : null;
//     };
//   }
  export function EmailValidator(control: AbstractControl): {[key:string]:any} |null
    {
      const forbidden = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(control.value);
      return forbidden ? null : {'forbiddenName': {value: control.value}};
    };

  