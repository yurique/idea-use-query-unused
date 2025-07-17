import {useQuery} from "@tanstack/react-query";

function Test() {
  const q = useQuery({
    queryKey: ['--'],
    queryFn: () => Promise.reject()
  })
  return null;
}

export default Test;
