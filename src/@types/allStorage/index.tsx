interface AllStorageProps {
  corporateName: string;
  city?: string;
  country?: string;
  phoneNumber?: string;
  description: string;
  picture: string;
}

interface StorageData {
  corporateName: string | null;
  city: string | null;
  country: string | null;
  phoneNumber: string | null;
  description: string | null;
  picture: string | null;
}
