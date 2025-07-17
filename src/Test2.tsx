import {useQuery as useQuery2} from "@tanstack/react-query";

function Test2() {
  const q = useQuery2({
    queryKey: ['--'],
    queryFn: () => Promise.reject()
  })
  return null;
}

export default Test2;
