export interface Company {
  id: number;
  uid: string;
  business_name: string;
  suffix: string;
  industry: string;
  type: string;
  catch_phrase: string;
  phone_number: string;
  full_address: string;
  latitude: number;
  longitude: number;
  logo: string;
}

export interface CompanyResponse {
  data: Company[];
  page: number;
  per_page: number;
  total_pages: number;
  offset: number;
  limit: number;
  total: number;
  has_prev: boolean;
  has_next: boolean;
}
