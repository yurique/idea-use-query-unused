import {useQuery as useQuery2} from "@tanstack/react-query";

export function Test2() {
  const q = useQuery2({
    queryKey: ['--'],
    queryFn: () => Promise.reject()
  })
  return null;
}
