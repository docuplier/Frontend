export type FormValues = {
  name?: string;
  website?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: number;
};

export type NavItems = {
  navNumber: number;
  navName: string;
};

export interface uploadLayoutTypes {
  children: any;
  currentComponent: number;
  formStepperNavItems: NavItems[];
  backArrow: boolean;
  onArrowClick?: () => void;
  formTitle: string;
  formSubtitle: string;
  topRightContents?: any;
  steps?: any;
}

export type InstancePerferenceProps = {
  logo?: any;
  modules?: string[];
  primaryColor?: string;
  secondaryColor?: string;
  tertiaryColor?: string;
};

export type InstanceDataTypes = {
  name: string;
  website: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  logo: any;
  modules: string[];
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
};

export interface InstanceResponse {
  current_page: number;
  page_size: number;
  results: InstanceResponseData[];
  total: number;
  total_pages: number;
}

export interface InstanceStatisticsResponse {
  result: {
    active: number;
    inactive: number;
    total_count: number;
  };
}

export interface InstanceResponseData {
  id: string;
  created_at: Date;
  updated_at: Date;
  identifier: string;
  name: string;
  modules: string[];
  time_zone: string;
  logo: string;
  admin: AdminData;
  website: string;
  primary_color: string;
  secondary_color: string;
  tertiary_color: string;
  status: string;
}

interface AdminData {
  id: string;
  email: string;
  phone: string;
  firstname: string;
  lastname: string;
  middlename: string;
  title: string;
  is_active: string;
  last_login: Date;
  personnel_id: string;
  designation: string;
  roles: string[];
  mda: string;
  department: string;
  unit: string;
  created_at: Date;
  image: string;
}

export interface EditNameProps {
  firstName: string | undefined;
  lastName: string | undefined;
  instanceId: string | undefined;
  setOpenNameEditModal: any;
}

export interface EditEmailProps {
  email: string | undefined;
  instanceId: string | undefined;
  setOpenEmailEditModal: any;
}

export interface EditWebsitesProps {
  website: string | undefined;
  instanceId: string | undefined;
  setOpenWebsiteEditModal: any;
}

export interface EditColorsProps {
  primaryColor: string | undefined;
  secondaryColor: string | undefined;
  tertiaryColor: string | undefined;
  instanceId: string | undefined;
  setOpenColorEditModal: any;
}
