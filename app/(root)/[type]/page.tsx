import Sort from '@/components/Sort';
import { getFiles } from '@/lib/actions/file.actions';
import { Models } from 'node-appwrite';

const page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || '';

  const files = await getFiles();
  return (
    <div className='page-container'>
      <section className='w-full'>
        <h1 className='h1 capitalize'>{type}</h1>
        <div className='total-size-section'>
          <p className='body-1'>
            Total: <span className='h5'>0 MB</span>
          </p>
          <div className='sort-container'>
            <p className='body-1 hidden text-light-200 sm:block'>Sort by:</p>
            <Sort />
          </div>
        </div>
      </section>
      {/* Render files */}
      {files.total > 0 ? (
        <section className='file-list'>
          {files.document.map((file: Models.Document) => (
            <h1 key={file.$id} className='h1'>
              {file.name}
            </h1>
          ))}
        </section>
      ) : (
        <p className='empty-list'>No files uploaded </p>
      )}
    </div>
  );
};
export default page;
