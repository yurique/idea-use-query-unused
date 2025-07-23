import {useQuery} from "@tanstack/react-query";
import {Test2} from './Test2'

function Test() {
  const q = useQuery({
    queryKey: ['--'],
    queryFn: () => Promise.reject()
  })
  return null;
}

export default Test;
