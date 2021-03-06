import { container } from 'tsyringe';
import uploadConfig from '@config/upload';
import IStorageProvider from '../StorageProvider/models/IStorageProvider';

import DiskStorageProvider from './Implementations/DiskStorageProvider';
import S3StorageProvider from './Implementations/S3StorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
}

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);

