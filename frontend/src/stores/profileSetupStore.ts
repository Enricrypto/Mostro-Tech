import { create } from 'zustand';

interface ProfileData {
  artistName: string;
  primaryGenre: string;
  bio: string;
  socials: {
    spotify: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
  token: {
    name: string;
    symbol: string;
    price: string;
  };
}

interface ProfileSetupState {
  currentStep: number;
  profileData: ProfileData;
  nextStep: () => void;
  prevStep: () => void;
  updateProfileData: (data: Partial<ProfileData>) => void;
  setGenre: (genre: string) => void;
}

export const useProfileSetupStore = create<ProfileSetupState>((set) => ({
  currentStep: 1,
  profileData: {
    artistName: '',
    primaryGenre: '',
    bio: '',
    socials: {
      spotify: '',
      instagram: '',
      youtube: '',
      tiktok: '',
    },
    token: {
      name: '',
      symbol: '',
      price: '0.10',
    },
  },
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  updateProfileData: (data) =>
    set((state) => ({
      profileData: { ...state.profileData, ...data },
    })),
  setGenre: (genre) =>
    set((state) => ({
      profileData: { ...state.profileData, primaryGenre: genre },
    })),
}));
