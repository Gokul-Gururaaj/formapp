
   
import { AbstractControl } from "@angular/forms"; 

// export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
//     return (control: AbstractControl): ValidationErrors | null => {
//       const forbidden = nameRe.test(control.value);
//       return forbidden ? {forbiddenName: {value: control.value}} : null;
//     };
//   }
 
    export function EmailValidator(control: AbstractControl): {[key:string]:any} |null
    {
        const emailname=control.value;
    
        const receiptantname   = emailname.substring(0, emailname.lastIndexOf("@"));
        
        const domainname = emailname.substring(emailname.indexOf("@") +1);
        const cdomainname = domainname.substring(0,domainname.indexOf("."));
        const extensionname=domainname.substring(domainname.indexOf(".") +1);  
        const forbidden = /^[a-zA-Z0-9_.+-]+@[a-z]+\.[a-z.]+$/.test(emailname);
      const receiptantnamev = /[a-zA-Z0-9_.+-]/.test(receiptantname);
      const dlist=[/^gmail$/,/^yahoo$/,/^hotmail$/,/^ritchennai$/,/^elait$/] 
      const domainnamev= dlist.some(name => name.test(cdomainname));
      const elist=[/^com$/,/^co.in$/,/^edu.in$/] 
      
      
      
      const extensionnamev= elist.some(name => name.test(extensionname));
      
      return forbidden && receiptantnamev && domainnamev &&  extensionnamev ? null : {'forbiddenName': {value: control.value}};
    };


  
