import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },

  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full'
  },

  // {
  //   path: 'profile',
  //   loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  // },

  {
    path: 'profiledetails',
    loadChildren: () => import('./profiledetails/profiledetails.module').then( m => m.ProfiledetailsPageModule)
  },
  {
    path: 'swipeprofiles',
    loadChildren: () => import('./swipeprofiles/swipeprofiles.module').then( m => m.SwipeprofilesPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'verification',
  //   loadChildren: () => import('./verification/verification.module').then( m => m.VerificationPageModule)
  // },
  // {
  //   path: 'verificationsucces',
  //   loadChildren: () => import('./verificationsucces/verificationsucces.module').then( m => m.VerificationsuccesPageModule)
  // },
  // {
  //   path: 'splash',
  //   loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  // },
  // {
  //   path: 'guardone',
  //   loadChildren: () => import('./guardone/guardone.module').then( m => m.GuardonePageModule)
  // },
  // {
  //   path: 'guardtwo',
  //   loadChildren: () => import('./guardtwo/guardtwo.module').then( m => m.GuardtwoPageModule)
  // },
  // {
  //   path: 'guardthree',
  //   loadChildren: () => import('./guardthree/guardthree.module').then( m => m.GuardthreePageModule)
  // },
  // {
  //   path: 'productdetails',
  //   loadChildren: () => import('./productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  // },
  // {
  //   path: 'sign-up-screen',
  //   loadChildren: () => import('./sign-up-screen/sign-up-screen.module').then( m => m.SignUpScreenPageModule)
  // },
  // {
  //   path: 'sign-up-screen-name',
  //   loadChildren: () => import('./sign-up-screen-name/sign-up-screen-name.module').then( m => m.SignUpScreenNamePageModule)
  // },
  // {
  //   path: 'sign-up-screen-email',
  //   loadChildren: () => import('./sign-up-screen-email/sign-up-screen-email.module').then( m => m.SignUpScreenEmailPageModule)
  // },
  // {
  //   path: 'sign-up-screen-password',
  //   loadChildren: () => import('./sign-up-screen-password/sign-up-screen-password.module').then( m => m.SignUpScreenPasswordPageModule)
  // },
  // {
  //   path: 'sign-up-screen-otp',
  //   loadChildren: () => import('./sign-up-screen-otp/sign-up-screen-otp.module').then( m => m.SignUpScreenOTPPageModule)
  // },
  // {
  //   path: 'sign-up-screen-successful',
  //   loadChildren: () => import('./sign-up-screen-successful/sign-up-screen-successful.module').then( m => m.SignUpScreenSuccessfulPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
