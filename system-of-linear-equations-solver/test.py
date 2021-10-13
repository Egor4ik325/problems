"""
python -m unittest discover
"""
import unittest

from matrix import Matrix, NonSingularMatrix
from solver import Solver


class MatrixTests(unittest.TestCase):
    def test_determinant(self):
        m = Matrix([[3, 9, 4], [1, 2, 5], [3, 2, 8]])
        self.assertEqual(m.det(), 65)


class SolverTests(unittest.TestCase):
    def test_1(self):
        a = NonSingularMatrix([[2, 5, 4], [1, 3, 2], [2, 10, 9]])
        b = [30, 150, 110]
        self.assertEqual(Solver(a, b).cramer(), [-152, 270, -254])
