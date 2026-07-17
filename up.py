import boto3

bucket_name = "movies-2026"

s3 = boto3.client("s3")

files = [
    "Adipurush.mp4",
    "Baahubali.mp4",
    "Chhaava.mp4",
    "12thFail.mp4",
    "HaiJawaniToh.mp4"
]

for file in files:
    try:
        s3.upload_file(
            Filename=file,
            Bucket=bucket_name,
            Key=file,
            ExtraArgs={
                "ContentType": "video/mp4",
                "ContentDisposition": "inline",
                "CacheControl": "max-age=3600"
            }
        )

        print(f"✅ {file} uploaded successfully")

    except Exception as e:
        print(f"❌ Error uploading {file}: {e}")

print("Upload process completed.")