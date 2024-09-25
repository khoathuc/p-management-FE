import useSWR, {SWRConfiguration} from 'swr';
import { rest } from "@/lib/rest";

const fetcher = (url: string) =>
	rest.get(url).then((res) => {
		return res.data.data;
	});

export const useCustomSWR = (key: string, config?: SWRConfiguration) => {
	return useSWR(key, fetcher, config);
}