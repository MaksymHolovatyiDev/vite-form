import {MainRoutes} from '@/environment/MainRoutes';

export const infoLength = 3;

export const cards = [
  {text: 'bg-Arcade', price: {year: 90, month: 9}},
  {text: 'bg-Advanced', price: {year: 120, month: 12}},
  {text: 'bg-Pro', price: {year: 150, month: 15}},
];

export const getData = {
  [MainRoutes.Plan]: {
    route: MainRoutes.Plan,
    title: 'Select your plan',
    actions: 'You have the option of monthly or yearly billing.',
  },
  [MainRoutes.Addons]: {
    route: MainRoutes.Addons,
    title: 'Pick add-ons',
    actions: 'Add-ons help enhance your gaming experience.',
  },
  [MainRoutes.Summary]: {
    route: MainRoutes.Summary,
    title: 'Finishing up',
    actions: 'Double-check everything looks OK before confirming.',
  },
  [MainRoutes.Thank]: {
    route: MainRoutes.Summary,
  },

  [MainRoutes.Default]: {
    route: MainRoutes.Default,
    title: 'Personal info',
    actions: 'Please provide your name, email address, and phone number.',
  },
};

export const sidePanelData = [
  {text: 'Your Info', route: MainRoutes.Default, content:'before:content-["1"]'},
  {text: 'Select Plan', route: MainRoutes.Plan, content:'before:content-["2"]'},
  {text: 'Add-ons', route: MainRoutes.Addons, content:'before:content-["3"]'},
  {text: 'Summary', route: MainRoutes.Summary,content:'before:content-["4"]'},
];

export const addonsPick = [
  {
    text: 'Online service',
    description: 'Access to multiply games',
    price: {
      year: 10,
      month: 1,
    },
  },
  {
    text: 'Larger storage',
    description: 'Extra 1 TB of cloud save',
    price: {
      year: 20,
      month: 2,
    },
  },
  {
    text: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: {
      year: 20,
      month: 2,
    },
  },
];
