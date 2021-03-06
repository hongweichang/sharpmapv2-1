﻿
using System;
using System.Collections.Generic;
#if DOTNET35
using Enumerable = System.Linq.Enumerable;
#else
using Enumerable = GeoAPI.DataStructures.Enumerable;
#endif

namespace SharpMap.Expressions
{
    public class CollectionExpression<TValue> : CollectionExpression, IEnumerable<TValue>
    {
        private readonly IEqualityComparer<TValue> _comparer;

        public CollectionExpression(IEnumerable<TValue> collection) 
            : this(collection, EqualityComparer<TValue>.Default) { }
        
        public CollectionExpression(IEnumerable<TValue> collection, IEqualityComparer<TValue> comparer) 
            : base(collection)
        {
            _comparer = comparer;
        }

        public new IEnumerable<TValue> Collection
        {
            get { return base.Collection as IEnumerable<TValue>; }
        }

        public IEqualityComparer<TValue> Comparer
        {
            get { return _comparer; }
        }

        public override Boolean Contains(Expression other)
        {
            CollectionExpression<TValue> ce = other as CollectionExpression<TValue>;

            if (ce == null)
            {
                return false;
            }

            IEnumerable<TValue> collection = ce.Collection;
            
            return Enumerable.All<TValue>(collection, delegate(TValue item)
                   {
                       return Enumerable.Contains<TValue>(collection, item, _comparer);
                   });
        }

        public override Boolean Equals(Expression other)
        {
            CollectionExpression<TValue> ce = other as CollectionExpression<TValue>;

            if (ce == null)
            {
                return false;
            }

            IEnumerable<TValue> otherCollection = ce.Collection;

            return Enumerable.SequenceEqual(Collection, otherCollection, _comparer);
        }

        public override Expression Clone()
        {
            IEnumerable<TValue> values = Collection;
            return new CollectionExpression(Enumerable.ToArray(values));
        }

        #region IEnumerable<TValue> Members

        public new IEnumerator<TValue> GetEnumerator()
        {
            if (Collection == null)
                return null;

            return Collection.GetEnumerator();
        }

        #endregion
    }
}
