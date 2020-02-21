import { AbstractControl } from '@angular/forms';

export function ValidateDate(control: AbstractControl) {
  const dateFormat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
  if (!control.value.match(dateFormat)) {
    return { dateIsFormated: true };
  }
  return null;
}
