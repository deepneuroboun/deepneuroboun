import argparse

parser = argparse.ArgumentParser(description='New DeepLabCut Project')
parser.add_argument('folderName', help='Folder Name')


args = parser.parse_args()
print('Project Created')

