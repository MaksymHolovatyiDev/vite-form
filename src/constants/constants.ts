import {MainRoutes} from '@/environment/variables';

export const cards = ['bg-Arcade', 'bg-Advanced', 'bg-Pro'];

export const billing = {
  year: [90, 120, 150],
  month: [9, 12, 15],
};

export const getData = (route: string) => {
  switch (route) {
    case MainRoutes.plan:
      return {
        route: MainRoutes.plan,
        title: 'Select your plan',
        actions: 'You have the option of monthly or yearly billing.',
      };
    case MainRoutes.addons:
      return {
        route: MainRoutes.addons,
        title: 'Pick add-ons',
        actions: 'Add-ons help enhance your gaming experience.',
      };
    case MainRoutes.summary:
      return {
        route: MainRoutes.summary,
        title: 'Finishing up',
        actions: 'Double-check everything looks OK before confirming.',
      };
    default:
      return {
        route: MainRoutes.default,
        title: 'Personal info',
        actions: 'Please provide your name, email address, and phone number.',
      };
  }
};

export const addonsPick = [
  {
    text: 'Online service',
    description: 'Access to multiply games',
    price: {
      year: 12,
      month: 1,
    },
  },
  {
    text: 'Larger storage',
    description: 'Extra 1 TB of cloud save',
    price: {
      year: 12,
      month: 1,
    },
  },
  {
    text: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
      year: 12,
      month: 1,
    },
  },
];
