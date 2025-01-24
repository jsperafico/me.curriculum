import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  useNavigate,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError() as Error;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <Card className='max-w-96 max-h-fit p-4 fixed m-auto inset-0 bg-cyan-800 text-cyan-100 shadow-cyan-800 rounded-xl'>
      <CardHeader>
        <h1 className='text-2xl text-center'>Something went wrong</h1>
      </CardHeader>
      <Separator className="my-1 border-y border-cyan-800 md:border-cyan-100 md:group-hover:border-cyan-800" orientation="horizontal"></Separator>
      <CardContent className='text-base grid grid-flow-row gap-2 py-2'>
        <p>The likely justification on why you are here, is because of a incorrect URL.</p>
        <p>Apologies for the inconvinience, please use the button bellow to return to a previous page.</p>
      </CardContent>
      <Separator className="my-1 border-y border-cyan-800 md:border-cyan-100 md:group-hover:border-cyan-800" orientation="horizontal"></Separator>
      <CardFooter className='justify-end text-lg align-middle min-h-12 p-0'>
        <button onClick={() => navigate(-1)} className='p-1 rounded-sm border transition-colors duration-[0.5s] hover:bg-cyan-100 hover:text-cyan-800 '>&larr; Go back</button>
      </CardFooter>
    </Card>
  );
}