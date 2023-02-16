import { FormGroup } from '@angular/forms';

export function userPasswordEqualValidator(formGroup: FormGroup) {
  const userName = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (userName.trim() + password.trim()) {
    return userName !== password ? null : { passwordEqualUser: true };
  } else {
    return null;
  }
}
