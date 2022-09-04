/**
 * Generated by orval v6.9.6 🍺
 * Do not edit manually.
 * Quarkus React Monorepo
 * Quarkus monorepo demonstrating Panache REST server with PrimeReact UI client
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useMutation } from '@tanstack/react-query';
import type { UseQueryOptions, UseMutationOptions, QueryFunction, MutationFunction, UseQueryResult, QueryKey } from '@tanstack/react-query';
import { useAxiosMutator } from './AxiosMutator';
import type { ErrorType } from './AxiosMutator';
export type GetEntityCarsParams = { request?: string };

/**
 * Entity that represents a car.
 */
export interface Car {
	id?: number;
	/** VIN number */
	vin: string;
	/** Manufacturer */
	make: string;
	/** Model Number */
	model: string;
	/** Year of manufacture */
	year: number;
	/** HTML color of the car */
	color: string;
	/** Price */
	price: number;
}

export interface QueryResponseCar {
	totalRecords?: number;
	records?: Car[];
}

export const useGetEntityCarsHook = () => {
	const getEntityCars = useAxiosMutator<QueryResponseCar>();

	return (params?: GetEntityCarsParams, signal?: AbortSignal) => {
		return getEntityCars({ url: `/entity/cars`, method: 'get', params, signal });
	};
};

export const getGetEntityCarsQueryKey = (params?: GetEntityCarsParams) => [`/entity/cars`, ...(params ? [params] : [])];

export type GetEntityCarsQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsHook>>>>;
export type GetEntityCarsQueryError = ErrorType<unknown>;

export const useGetEntityCars = <TData = Awaited<ReturnType<ReturnType<typeof useGetEntityCarsHook>>>, TError = ErrorType<unknown>>(
	params?: GetEntityCarsParams,
	options?: { query?: UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsHook>>>, TError, TData> }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const { query: queryOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getGetEntityCarsQueryKey(params);

	const getEntityCars = useGetEntityCarsHook();

	const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsHook>>>> = ({ signal }) => getEntityCars(params, signal);

	const query = useQuery<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsHook>>>, TError, TData>(queryKey, queryFn, queryOptions) as UseQueryResult<
		TData,
		TError
	> & { queryKey: QueryKey };

	query.queryKey = queryKey;

	return query;
};

export const usePostEntityCarsHook = () => {
	const postEntityCars = useAxiosMutator<void>();

	return (car: Car) => {
		return postEntityCars({ url: `/entity/cars`, method: 'post', headers: { 'Content-Type': 'application/json' }, data: car });
	};
};

export type PostEntityCarsMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePostEntityCarsHook>>>>;
export type PostEntityCarsMutationBody = Car;
export type PostEntityCarsMutationError = ErrorType<unknown>;

export const usePostEntityCars = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
	mutation?: UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePostEntityCarsHook>>>, TError, { data: Car }, TContext>;
}) => {
	const { mutation: mutationOptions } = options ?? {};

	const postEntityCars = usePostEntityCarsHook();

	const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePostEntityCarsHook>>>, { data: Car }> = (props) => {
		const { data } = props ?? {};

		return postEntityCars(data);
	};

	return useMutation<Awaited<ReturnType<typeof postEntityCars>>, TError, { data: Car }, TContext>(mutationFn, mutationOptions);
};

export const useGetEntityCarsManufacturersHook = () => {
	const getEntityCarsManufacturers = useAxiosMutator<string[]>();

	return (signal?: AbortSignal) => {
		return getEntityCarsManufacturers({ url: `/entity/cars/manufacturers`, method: 'get', signal });
	};
};

export const getGetEntityCarsManufacturersQueryKey = () => [`/entity/cars/manufacturers`];

export type GetEntityCarsManufacturersQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsManufacturersHook>>>>;
export type GetEntityCarsManufacturersQueryError = ErrorType<unknown>;

export const useGetEntityCarsManufacturers = <
	TData = Awaited<ReturnType<ReturnType<typeof useGetEntityCarsManufacturersHook>>>,
	TError = ErrorType<unknown>
>(options?: {
	query?: UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsManufacturersHook>>>, TError, TData>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const { query: queryOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getGetEntityCarsManufacturersQueryKey();

	const getEntityCarsManufacturers = useGetEntityCarsManufacturersHook();

	const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsManufacturersHook>>>> = ({ signal }) =>
		getEntityCarsManufacturers(signal);

	const query = useQuery<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsManufacturersHook>>>, TError, TData>(
		queryKey,
		queryFn,
		queryOptions
	) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

	query.queryKey = queryKey;

	return query;
};

export const useGetEntityCarsIdHook = () => {
	const getEntityCarsId = useAxiosMutator<Car>();

	return (id: number, signal?: AbortSignal) => {
		return getEntityCarsId({ url: `/entity/cars/${id}`, method: 'get', signal });
	};
};

export const getGetEntityCarsIdQueryKey = (id: number) => [`/entity/cars/${id}`];

export type GetEntityCarsIdQueryResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsIdHook>>>>;
export type GetEntityCarsIdQueryError = ErrorType<unknown>;

export const useGetEntityCarsId = <TData = Awaited<ReturnType<ReturnType<typeof useGetEntityCarsIdHook>>>, TError = ErrorType<unknown>>(
	id: number,
	options?: { query?: UseQueryOptions<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsIdHook>>>, TError, TData> }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
	const { query: queryOptions } = options ?? {};

	const queryKey = queryOptions?.queryKey ?? getGetEntityCarsIdQueryKey(id);

	const getEntityCarsId = useGetEntityCarsIdHook();

	const queryFn: QueryFunction<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsIdHook>>>> = ({ signal }) => getEntityCarsId(id, signal);

	const query = useQuery<Awaited<ReturnType<ReturnType<typeof useGetEntityCarsIdHook>>>, TError, TData>(queryKey, queryFn, {
		enabled: !!id,
		...queryOptions
	}) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

	query.queryKey = queryKey;

	return query;
};

export const usePutEntityCarsIdHook = () => {
	const putEntityCarsId = useAxiosMutator<Car>();

	return (id: number, car: Car) => {
		return putEntityCarsId({ url: `/entity/cars/${id}`, method: 'put', headers: { 'Content-Type': 'application/json' }, data: car });
	};
};

export type PutEntityCarsIdMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof usePutEntityCarsIdHook>>>>;
export type PutEntityCarsIdMutationBody = Car;
export type PutEntityCarsIdMutationError = ErrorType<unknown>;

export const usePutEntityCarsId = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
	mutation?: UseMutationOptions<Awaited<ReturnType<ReturnType<typeof usePutEntityCarsIdHook>>>, TError, { id: number; data: Car }, TContext>;
}) => {
	const { mutation: mutationOptions } = options ?? {};

	const putEntityCarsId = usePutEntityCarsIdHook();

	const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof usePutEntityCarsIdHook>>>, { id: number; data: Car }> = (props) => {
		const { id, data } = props ?? {};

		return putEntityCarsId(id, data);
	};

	return useMutation<Awaited<ReturnType<typeof putEntityCarsId>>, TError, { id: number; data: Car }, TContext>(mutationFn, mutationOptions);
};

export const useDeleteEntityCarsIdHook = () => {
	const deleteEntityCarsId = useAxiosMutator<void>();

	return (id: number) => {
		return deleteEntityCarsId({ url: `/entity/cars/${id}`, method: 'delete' });
	};
};

export type DeleteEntityCarsIdMutationResult = NonNullable<Awaited<ReturnType<ReturnType<typeof useDeleteEntityCarsIdHook>>>>;

export type DeleteEntityCarsIdMutationError = ErrorType<unknown>;

export const useDeleteEntityCarsId = <TError = ErrorType<unknown>, TContext = unknown>(options?: {
	mutation?: UseMutationOptions<Awaited<ReturnType<ReturnType<typeof useDeleteEntityCarsIdHook>>>, TError, { id: number }, TContext>;
}) => {
	const { mutation: mutationOptions } = options ?? {};

	const deleteEntityCarsId = useDeleteEntityCarsIdHook();

	const mutationFn: MutationFunction<Awaited<ReturnType<ReturnType<typeof useDeleteEntityCarsIdHook>>>, { id: number }> = (props) => {
		const { id } = props ?? {};

		return deleteEntityCarsId(id);
	};

	return useMutation<Awaited<ReturnType<typeof deleteEntityCarsId>>, TError, { id: number }, TContext>(mutationFn, mutationOptions);
};
