/** A hero's name can't match the hero's alter ego */
import { AbstractControl,ValidatorFn,ValidationErrors } from "@angular/forms";

export const PasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
  
    return password && confirmpassword && password.value === confirmpassword.value ? { passwordRevealed: true } : null;
  };