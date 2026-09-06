import sys, os; sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from tsp_solver import tsp

def test_tsp_solver():
    # Define the distance matrix
    distances = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]]
    # Call the tsp function
    result = tsp(4, distances)
    # Check if the result is correct
    assert result == 65

def main():
    test_tsp_solver()
if __name__ == '__main__':
    main()