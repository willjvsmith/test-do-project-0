//import { S3Client } from "@aws-sdk/client-s3";
import { BinaryReader } from "@protobuf-ts/runtime";

export function main(args: {}): {} {
  /*
  const s3Client = new S3Client({});
  console.log(s3Client.config);
  return { body: {} };
  */
  const reader = new BinaryReader(Buffer.from("TEST"));
  console.log(reader.len);
  return { body: {} };
}
