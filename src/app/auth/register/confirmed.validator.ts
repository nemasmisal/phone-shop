import { FormGroup } from "@angular/forms";

export function comparePasswordsValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) { return; }

        if (control.value !== matchingControl.value) { return matchingControl.setErrors({ mustMatch: true }); }
        return matchingControl.setErrors(null);
    };
}