const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  meta?: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  price: string;
  sku: string;
  category?: Category;
  variants?: ProductVariant[];
  images?: ProductImage[];
  is_published: boolean;
  is_featured: boolean;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  parent?: Category | null;
  children?: Category[];
}

export interface ProductVariant {
  id: number;
  color: string | null;
  size: string | null;
  price: string | null;
  stock: number;
  sku: string;
}

export interface ProductImage {
  id: number;
  image: string;
  is_main: boolean;
  order: number;
}

class ApiClient {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async getProducts(params?: { category?: string; search?: string; page?: number }): Promise<ApiResponse<Product[]>> {
    const searchParams = new URLSearchParams();
    if (params?.category) searchParams.set('category', params.category);
    if (params?.search) searchParams.set('search', params.search);
    if (params?.page) searchParams.set('page', params.page.toString());

    const queryString = searchParams.toString() ? `?${searchParams.toString()}` : '';
    return this.request<Product[]>(`/products${queryString}`);
  }

  async getProduct(slug: string): Promise<ApiResponse<Product>> {
    return this.request<Product>(`/products/${slug}`);
  }

  async getCategories(): Promise<ApiResponse<Category[]>> {
    return this.request<Category[]>('/categories');
  }

  async getCategory(slug: string): Promise<ApiResponse<Category>> {
    return this.request<Category>(`/categories/${slug}`);
  }
}

export const api = new ApiClient();
