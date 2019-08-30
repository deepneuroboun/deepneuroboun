import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import kde


def get_data():
    import csv
    x, y = [], []
    with open('./sicanDeepCut_resnet50_demoMay10shuffle1_3500.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                print(f'Column names are {", ".join(row)}')
            else:
                x.append(float(row[1]))
                y.append(float(row[2]))
            line_count += 1
    return np.array(x), np.array(y)


x, y = get_data()
print(x[0:10])

nbins = 300
k = kde.gaussian_kde([x,y])
xi, yi = np.mgrid[x.min():x.max():nbins*1j, y.min():y.max():nbins*1j]
zi = k(np.vstack([xi.flatten(), yi.flatten()]))
print(xi, yi)

plt.pcolormesh(xi, yi, zi.reshape(xi.shape))
plt.show()


