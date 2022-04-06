import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

export const Toast = async ({ color, duration, message }) => {
  let toastController: ToastController;
  try {
    const toa = await toastController.create({
      color,
      duration,
      message,
    });
    await toa.present();
  } catch (error) {
    console.log(error);
  }
};

export const route = (ruta) => {
  let router: Router;

  router.navigate[ruta].then(() => {
    window.location.reload();
  });
};

export const reset = (formGroup) => {
  formGroup.reset()
};
