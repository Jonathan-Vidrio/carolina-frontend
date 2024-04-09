import {Injectable} from "@angular/core";
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  error(title: string, text: string): Promise<any> {
    return Swal.fire({
      icon: 'error',
      title: title,
      text: text
    })
  }

  success(title: string, text: string): Promise<any> {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: text
    })
  }
}
