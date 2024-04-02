interface AllStorageProps {
  corporateName: string;
  address?: string;
  postalCode?: string;
  phoneNumber?: string;
  description: string;
  picture: string;
}

interface StorageData {
  corporateName: string | null;
  address: string | null;
  postalCode: string | null;
  phoneNumber: string | null;
  description: string | null;
  picture: string | null;
}
