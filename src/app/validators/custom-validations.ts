import { FormGroup, FormControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/**
 * Custom validator functions for reactive form validation
 */
export class CustomValidators {

    // ==================================
    // Validates that child controls in the form group are equal
    // ==================================
    static childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
        const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {});
        const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value);
        return isValid ? null : { childrenNotEqual: true };
    }
}

// ==================================
// Custom ErrorStateMatcher which returns true (error exists) when the parent form group is invalid and the control has been touched
// ==================================
export class ConfirmValidParentMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        return control.parent.invalid && control.touched;
    }
}

// ==================================
// Collection of reusable RegExps
// ==================================
export const regExps: { [key: string]: RegExp } = {
   password: /^(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{7,15}$/
};

// ==================================
// Collection of reusable error messages
// ==================================
export const errorMessages: { [key: string]: string } = {
    rut: 'El RUT es obligatorio y debe tener 10 caracteres.',
    fono: 'El fono es obligatorio y debe tener mínimo 9 caracteres.',
    rznSocial: 'Es obligatorio y debe tener entre 5 y 128 caracteres.',
    email: 'Es obligatorio y debe ser una dirección de correo electrónico válida (nombredeusuario@dominio)',
    confirmEmail: 'Los correos electrónicos deben coincidir',
    password: 'La contraseña debe tener entre 8 y 15 caracteres y contener al menos un número y un carácter especial',
    passwordRequire: 'La password es Obligatoria',
    confirmPassword: 'Las contraseñas deben coincidir',
    rutValido: 'El RUT ingresado no es válido',
    requerido: 'Este campo es obligatorio'
};

